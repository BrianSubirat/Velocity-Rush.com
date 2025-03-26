// Game Configuration

export const config = {
    // Game Settings
    game: {
        title: "Velocity Rush: Street Legends",
        version: "1.0.0",
        loadingTime: 3000, // ms for loading screen (simulated loading)
    },
    
    // Graphics Settings
    graphics: {
        defaultQuality: "medium", // low, medium, high, ultra
        defaultResolution: "1080p", // 720p, 1080p, 1440p, 4k
        shadowsEnabled: true,
        reflectionsEnabled: true,
        antialiasing: true,
        motionBlurStrength: 0.5, // 0.0 to 1.0
    },
    
    // Audio Settings
    audio: {
        masterVolume: 0.8, // 0.0 to 1.0
        musicVolume: 0.7, // 0.0 to 1.0
        sfxVolume: 0.9, // 0.0 to 1.0
        engineSoundIntensity: 0.8, // 0.0 to 1.0
    },
    
    // Car Types and Properties
    cars: {
        muscle: {
            name: "Thunder GT",
            maxSpeed: 200,
            acceleration: 0.7,
            handling: 0.5,
            braking: 0.6,
            colors: ["#ff0000", "#0000ff", "#333333", "#ffffff", "#ffff00"],
            showcaseAnimation: "rev" // rev, drift, spin
        },
        sport: {
            name: "Velocity Z",
            maxSpeed: 220,
            acceleration: 0.8,
            handling: 0.8,
            braking: 0.7,
            colors: ["#00ff00", "#ff00ff", "#000000", "#0066cc", "#ff6600"],
            showcaseAnimation: "drift" // rev, drift, spin
        },
        super: {
            name: "Phantom X",
            maxSpeed: 250,
            acceleration: 0.9,
            handling: 0.7,
            braking: 0.9,
            colors: ["#ff00ff", "#ffff00", "#00ffff", "#ffffff", "#ff0000"],
            showcaseAnimation: "spin" // rev, drift, spin
        }
    },
    
    // Environment Settings
    environment: {
        garageAmbientLight: 0.7,
        garageSpotlights: [
            { color: "#00ffff", intensity: 1.5, position: [5, 5, 5] },
            { color: "#ff00ff", intensity: 1.2, position: [-5, 5, -5] },
            { color: "#ffff00", intensity: 0.8, position: [0, 6, 0] }
        ],
        fogDensity: 0.02,
        reflectiveFloor: true,
    },
    
    // Camera Settings
    camera: {
        fov: 75,
        rotationSpeed: 0.01,
        initialPosition: [0, 2, 7],
        lookAt: [0, 0, 0]
    },
    
    // Physics Settings
    physics: {
        gravity: -9.8,
        friction: 0.3,
        restitution: 0.4,
        vehicleMass: 1500,
        suspensionStiffness: 30,
        suspensionDamping: 2.3,
        suspensionTravel: 0.3
    }
};

