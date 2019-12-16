package com.cognizant.trainingmicroservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="skill")
public class Skill {

	@Id
	@Column(name="skill_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@NotNull
	private long id;
	@NotNull
	@Column(name="skill_name")
	private String name;
	@Column(name="skill_toc")
	private String toc;
	@OneToOne
	@JoinColumn(name="skill_prerequisite")
	private Skill prerequisite;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getToc() {
		return toc;
	}
	public void setToc(String toc) {
		this.toc = toc;
	}
	public Skill getSkill() {
		return prerequisite;
	}
	public void setSkill(Skill prerequisite) {
		this.prerequisite = prerequisite;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "Skill [id=" + id + ", name=" + name + ", toc=" + toc + ", prerequisite=" + prerequisite + "]";
	}
	
}
