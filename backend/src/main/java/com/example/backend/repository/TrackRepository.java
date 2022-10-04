package com.example.backend.repository;

import com.example.backend.models.Track;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrackRepository extends JpaRepository<Track, Integer> {
    List<Track> findAll();

    Track findById(int id);

    Track save(Track athlete);

    Track deleteById(int id);
}
