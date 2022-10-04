package com.example.backend.controller;

import com.example.backend.models.Entry;
import com.example.backend.models.Player;
import com.example.backend.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/player")
public class PlayerController {

    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerController(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @GetMapping
    public @ResponseBody Iterable<Player> getAll(){
        return playerRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Player getPlayer(@PathVariable int id){

        return playerRepository.findById(id);
    }

    @GetMapping(path ="/returnId/{name}")
    public int getIdBasedOnPlayerName(@PathVariable String name){
        Player foundPlayer = playerRepository.findByName(name);

        return foundPlayer.getId();
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Player> update(@RequestBody Player player, @PathVariable int id){
        Player toBeUpdatedPlayer = playerRepository.findById(id);

        toBeUpdatedPlayer.setName(player.getName());

        playerRepository.save(toBeUpdatedPlayer);

        return ResponseEntity.ok(toBeUpdatedPlayer);
    }

    @PostMapping
    public ResponseEntity<Player> createPlayer(@RequestBody Player player){
        Player toBeInsertedPlayer = playerRepository.save(player);
        toBeInsertedPlayer.setEntries(player.getEntries());

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(toBeInsertedPlayer.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Player> deletePlayer(@PathVariable int id){
        Player toBeDeletedPlayer = playerRepository.deleteById(id);

        return ResponseEntity.ok(toBeDeletedPlayer);
    }
}
