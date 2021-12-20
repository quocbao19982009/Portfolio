import React from "react";
import Particles from "react-tsparticles";

const Background = () => {
  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {};
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            grab: {
              distance: 400,
            },
            push: {
              groups: ["z5000", "z7500", "z2500", "z1000"],
            },
          },
        },
        particles: {
          color: {
            value: "#00cdac",
            animation: {
              h: {
                speed: 0.01,
              },
            },
          },
          groups: {
            z5000: {
              number: {
                value: 70,
              },
              zIndex: {
                value: 50,
              },
            },
            z7500: {
              number: {
                value: 30,
              },
              zIndex: {
                value: 75,
              },
            },
            z2500: {
              number: {
                value: 50,
              },
              zIndex: {
                value: 25,
              },
            },
            z1000: {
              number: {
                value: 40,
              },
              zIndex: {
                value: 10,
              },
            },
          },
          links: {
            color: {
              value: "#ffffff",
            },
            opacity: 0.4,
          },
          move: {
            angle: {
              value: 10,
            },
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            direction: "bottom",
            enable: true,
            path: {},
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            speed: 5,
            spin: {},
          },
          number: {
            value: 200,
          },
          opacity: {
            animation: {
              speed: 0.1,
              minimumValue: 0.1,
            },
          },
          size: {
            animation: {},
          },
          zIndex: {
            value: 5,
            opacityRate: 0.5,
          },
        },
        emitters: {
          autoPlay: true,
          fill: true,
          life: {
            wait: false,
          },
          rate: {
            quantity: 1,
            delay: 7,
          },
          shape: "square",
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 0,
          },
          position: {
            x: -5,
            y: 55,
          },
        },
      }}
    ></Particles>
  );
};

export default Background;
