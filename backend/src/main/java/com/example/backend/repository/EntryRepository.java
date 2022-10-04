package com.example.backend.repository;

import com.example.backend.models.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.relational.core.sql.In;

import java.util.List;

public interface EntryRepository extends JpaRepository<Entry, Integer> {
    List<Entry> findAll();

    Entry findById(int id);

    Entry save(Entry entry);

    Entry deleteById(int id);
}


