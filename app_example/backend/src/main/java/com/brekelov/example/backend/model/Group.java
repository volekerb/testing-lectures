package com.brekelov.example.backend.model;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "user_group")
public class Group {

  @Id
  @GeneratedValue
  private Long id;
  @NonNull
  private String name;
  private String address;
  private String city;
  private String stateOrProvince;
  private String country;
  private String postalCode;
  @ManyToOne(cascade= CascadeType.PERSIST)
  private User user;

  @OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
  private Set<Event> events;
}