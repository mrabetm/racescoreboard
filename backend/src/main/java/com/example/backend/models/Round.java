//package com.example.backend.models;
//
//import com.fasterxml.jackson.annotation.JsonManagedReference;
//
//import javax.persistence.*;
//
//@Entity
//public class Round {
//  @Id
//  @Column(name = "round_id")
//  @GeneratedValue(strategy = GenerationType.AUTO)
//  private int id;
//
//  @Column(name = "name")
//  private String name;
//
//  @ManyToOne()
//  @JsonManagedReference(value = "round-track")
//  private Track track;
//
//  public Round(int id, String name, Track track) {
//    this.id = id;
//    this.name = name;
//    this.track = track;
//  }
//
//  public Round() {
//  }
//
//  public int getId() {
//    return id;
//  }
//
//  public void setId(int id) {
//    this.id = id;
//  }
//
//  public String getName() {
//    return name;
//  }
//
//  public void setName(String name) {
//    this.name = name;
//  }
//
//  public Track getTrack() {
//    return track;
//  }
//
//  public void setTrack(Track track) {
//    this.track = track;
//  }
//}
