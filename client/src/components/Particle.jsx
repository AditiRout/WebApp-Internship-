import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{

                fullScreen:{
                    enable:true,
                    zIndex:-1
                },
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    number: {
                      value: 0,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    },
                    color: {
                      value: "#ffff00"
                    },
                    shape: {
                      type: "circle"
                    },
                    opacity: {
                      value: 1,
                      random: false,
                      animation: {
                        enable: true,
                        speed: 0.5,
                        minimumValue: 0,
                        sync: false
                      }
                    },
                    size: {
                      value: 8,
                      random: { enable: true, minimumValue: 4 },
                      animation: {
                        enable: false,
                        speed: 20,
                        minimumValue: 4,
                        sync: false
                      }
                    },
                    move: {
                      enable: true,
                      gravity: {
                        enable: true,
                        acceleration: -0.5
                      },
                      speed: 5,
                      direction: "top",
                      random: false,
                      straight: false,
                      outModes: {
                        default: "destroy",
                        bottom: "none"
                      },
                      attract: {
                        enable: true,
                        distance: 300,
                        rotate: {
                          x: 600,
                          y: 1200
                        }
                      }
                    }
                  },
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      resize: true
                    }
                  },
                  detectRetina: true,
                  background: {
                    color: "#000000"
                  },
                  emitters: [
                    {
                      direction: "top",
                      particles: {
                        color: "#f00"
                      },
                      rate: {
                        quantity: 1,
                        delay: 0.1
                      },
                      size: {
                        width: 100,
                        height: 10
                      },
                      position: {
                        x: 50,
                        y: 100
                      }
                    },
                    {
                      direction: "top",
                      particles: {
                        color: "#0f0"
                      },
                      rate: {
                        quantity: 1,
                        delay: 0.1
                      },
                      size: {
                        width: 100,
                        height: 10
                      },
                      position: {
                        x: 50,
                        y: 100
                      }
                    }
                ]}}
        />
    );
};

export default Particle