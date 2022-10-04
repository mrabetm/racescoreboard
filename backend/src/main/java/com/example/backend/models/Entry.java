package com.example.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Entry {
    @Id
    @Column(name = "entry_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "ranking", nullable = true)
    private int ranking;

    @Column(name = "entrytime")
    private int entryTime;

    @Column(name = "date")
    private Date date;

    @Column(name = "score")
    private int score;

    @Column(name = "week")
    private int week;

    @ManyToOne
    @JoinColumn(name = "track_id")
    @JsonBackReference(value = "entry-track")
    private Track track;

    @ManyToOne
    @JoinColumn(name = "player_id")
    @JsonManagedReference(value = "player-entry")
    private Player player;

    @ManyToOne
    @JoinColumn(name = "car_id")
    @JsonManagedReference(value = "car-entry")
    private Car car;

    public Entry(int id, int ranking, int entryTime, Date date, int score, int week, Track track, Player player, Car car) {
        this.id = id;
        this.ranking = ranking;
        this.entryTime = entryTime;
        this.date = date;
        this.score = score;
        this.week = week;
        this.track = track;
        this.player = player;
        this.car = car;
    }

    public Entry() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getEntryTime() {
        return entryTime;
    }

    public void setEntryTime(int entryTime) {
        this.entryTime = entryTime;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Track getTrack() {
        return track;
    }

    public void setTrack(Track track) {
        this.track = track;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }

    public int getWeek() {
        return week;
    }

    public void setWeek(int week) {
        this.week = week;
    }
}
