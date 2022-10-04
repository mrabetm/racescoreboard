package com.example.backend.controller;

import com.example.backend.models.Entry;
import com.example.backend.models.Player;
import com.example.backend.repository.EntryRepository;
import com.example.backend.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/entry")
public class EntryController {

    private final EntryRepository entryRepository;
    private final PlayerRepository playerRepository;

    @Autowired
    public EntryController(EntryRepository entryRepository, PlayerRepository playerRepository) {
        this.entryRepository = entryRepository;
        this.playerRepository = playerRepository;
    }

    @GetMapping
    public @ResponseBody Iterable<Entry> getAll(){
        return entryRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Entry getEntry(@PathVariable int id){

        return entryRepository.findById(id);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Entry> update(@RequestBody Entry entry, @PathVariable int id){
        Entry toBeUpdatedEntry = entryRepository.findById(id);

        toBeUpdatedEntry.setEntryTime(entry.getEntryTime());
        toBeUpdatedEntry.setDate(entry.getDate());
        toBeUpdatedEntry.setScore(entry.getScore());
        toBeUpdatedEntry.setEntryTime(entry.getEntryTime());
        toBeUpdatedEntry.setPlayer(entry.getPlayer());

        entryRepository.save(toBeUpdatedEntry);

        return ResponseEntity.ok(toBeUpdatedEntry);
    }

    @PostMapping
    public ResponseEntity<Entry> createEntry(@RequestBody Entry entry){
        System.out.println("----------");
        System.out.println(entry.getPlayer().toString());
        System.out.println("----------");

        for (int i = 0; i < playerRepository.findAll().size(); i++){
            if (entry.getPlayer().equals(playerRepository.findByName(entry.getPlayer().getName()))){
                entry.setPlayer(playerRepository.findByName(entry.getPlayer().getName()));
                System.out.println(playerRepository.findByName(entry.getPlayer().getName()));
                break;
            }
            i++;
        }

        entry.setPlayer(entry.getPlayer());
        Entry toBeInsertedEntry = entryRepository.save(entry);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(toBeInsertedEntry.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Entry> deleteEntry(@PathVariable int id){
        Entry toBeDeletedEntry = entryRepository.deleteById(id);

        return ResponseEntity.ok(toBeDeletedEntry);
    }
}
