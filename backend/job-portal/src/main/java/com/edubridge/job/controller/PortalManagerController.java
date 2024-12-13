package com.edubridge.job.controller;

import com.edubridge.job.model.PortalManager;
import com.edubridge.job.service.PortalManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PortalManagerController {

    @Autowired
    private PortalManagerService portalManagerService;

    @GetMapping("/portal-manager/login")
    public String showLoginPage() {
        return "login"; // This will return the login.html page
    }

    @PostMapping("/portal-manager/login")
    public String login(@RequestParam String portalManagerEmail, 
                        @RequestParam String portalManagerPassword, 
                        Model model) {

        PortalManager portalManager = portalManagerService.authenticate(portalManagerEmail, portalManagerPassword);

        if (portalManager != null) {
            // Successfully logged in, redirect to the dashboard or home page
            model.addAttribute("portalManager", portalManager);
            return "redirect:/dashboard";  // Redirect to your dashboard or home page
        } else {
            // Invalid login, show error message
            model.addAttribute("errorMessage", "Invalid email or password");
            return "login"; // Show the login page again with error
        }
    }
}
