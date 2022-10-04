package com.example.backend.controller;

import com.example.backend.models.Track;
import com.example.backend.repository.TrackRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/track")
public class TrackController {
    private final TrackRepository trackRepository;

    public TrackController(TrackRepository trackRepository) {
        this.trackRepository = trackRepository;
    }
    @GetMapping
    public @ResponseBody
    Iterable<Track> getAll(){
        return trackRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Track getTrack(@PathVariable int id){
        return trackRepository.findById(id);
    }
    @PostMapping
    public ResponseEntity<Track> createTrack(@RequestBody Track track) {
        Track toBeInsertedTrack = trackRepository.save(track);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(toBeInsertedTrack.getId()).toUri();

        return ResponseEntity.created(location).build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Track> deleteTrack(@PathVariable int id){
        Track toBeDeletedTrack = trackRepository.deleteById(id);

        return ResponseEntity.ok(toBeDeletedTrack);
    }
}
