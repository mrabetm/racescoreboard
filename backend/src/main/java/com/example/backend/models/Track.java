package com.example.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Track {
    @Id
    @Column(name = "track_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "location")
    private String location;

    @Column(name = "length")
    private double length;

//    @OneToMany(mappedBy = "track")
//    @JsonBackReference
//    private List<Round> roundList = new ArrayList<>();

    @OneToMany(mappedBy = "track")
    @JsonManagedReference(value = "entry-track")
    private List<Entry> entryList = new ArrayList<>();

  public Track(int id, String name, String location, double length, List<Entry> entryList) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.length = length;
    this.entryList = entryList;
  }

  public Track() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public List<Entry> getEntryList() {
        return entryList;
    }

    public void setEntryList(List<Entry> entryList) {
        this.entryList = entryList;
    }

//  public List<Round> getRoundList() {
//    return roundList;
//  }
//
//  public void setRoundList(List<Round> roundList) {
//    this.roundList = roundList;
//  }
}
