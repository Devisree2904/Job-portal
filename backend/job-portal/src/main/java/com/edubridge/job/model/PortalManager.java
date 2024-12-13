package com.edubridge.job.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "portal_manager")
public class PortalManager {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long portalManagerId;

    private String portalManagerName; 
    private String portalManagerEmail;
    private Long portalManagerPassword;
    private Long portalManagerMobile; 
    private String portalManagerRole;
    
}
