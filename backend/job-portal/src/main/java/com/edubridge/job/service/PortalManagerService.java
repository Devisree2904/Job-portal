package com.edubridge.job.service;

import com.edubridge.job.model.PortalManager;
import com.edubridge.job.repo.PortalManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PortalManagerService {

    @Autowired
    private PortalManagerRepository portalManagerRepository;

    public PortalManager authenticate(String portalManagerEmail, String portalManagerPassword) {
        Optional<PortalManager> portalManagerOpt = portalManagerRepository.findByPortalManagerEmail(portalManagerEmail);

        if (portalManagerOpt.isPresent()) {
            PortalManager portalManager = portalManagerOpt.get();
            if (portalManager.getPortalManagerPassword().equals(portalManagerPassword)) {
                return portalManager; // Authentication successful
            }
        }
        return null; // Authentication failed
    }
}
