package com.example.backend.repository;

import com.example.backend.models.Entry;
import com.example.backend.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Integer> {
    List<Player> findAll();

    Player findById(int id);

    Player save(Player player);

    Player deleteById(int id);

    Player findByName(String name);
}
