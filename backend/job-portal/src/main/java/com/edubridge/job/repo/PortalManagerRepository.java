package com.edubridge.job.repo;

import com.edubridge.job.model.PortalManager;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PortalManagerRepository extends JpaRepository<PortalManager, Long> {

	 Optional<PortalManager> findByPortalManagerEmail(String portalManagerEmail);
}
