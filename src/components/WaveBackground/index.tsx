import React, { useEffect, useRef, useState } from "react";
import Mage from "../../assets/images/heroFrontPage.png";
import MageBackground from "../../assets/svg/magebg.svg";
import { SineWaveGenerator } from "../../utils/WaveGeneretor/WaveGenerator";
import * as Styled from "./style";

const WaveBackground: React.FC = () => {
  const WaveBack = useRef();
  const WaveFront = useRef();

  useEffect(() => {
    new SineWaveGenerator({
      el: WaveBack.current,

      speed: 2,

      waves: [
        {
          timeModifier: 1,
          lineWidth: 3,
          amplitude: 150,
          wavelength: 200,
          segmentLength: 20,
        },
        {
          timeModifier: 1,
          lineWidth: 2,
          amplitude: 250,
          wavelength: 200,
        },
        {
          timeModifier: 1,
          lineWidth: 1,
          amplitude: 200,
          wavelength: 250,
          segmentLength: 30,
        },
        {
          timeModifier: 1,
          lineWidth: 2,
          amplitude: 300,
          wavelength: 400,
          segmentLength: 50,
        },
      ],

      initialize: function () {},

      resizeEvent: function () {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, "rgba(138,43,226,1)");
        gradient.addColorStop(0.5, "#7AFBFD");
        gradient.addColorStop(1, "rgba(153,50,204,1)");

        var gradientVariant = this.ctx.createLinearGradient(
          0,
          0,
          this.width,
          0
        );
        gradientVariant.addColorStop(0, "rgba(138,43,226,1)");
        gradientVariant.addColorStop(0.5, "rgba(148,0,211,1)");
        gradientVariant.addColorStop(1, "#7AFBFD");

        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
          if (index < 2) {
            this.waves[index].strokeStyle = gradient;
          } else {
            this.waves[index].strokeStyle = gradientVariant;
          }
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      },
    });

    new SineWaveGenerator({
      el: WaveFront.current,

      speed: 4,

      waves: [
        {
          timeModifier: 1,
          lineWidth: 3,
          amplitude: 120,
          wavelength: 170,
          segmentLength: 10,
        },
      ],

      initialize: function () {},

      resizeEvent: function () {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, "rgba(138,43,226,1)");
        gradient.addColorStop(0.5, "rgba(148,0,211,1)");
        gradient.addColorStop(1, "rgba(153,50,204,1)");

        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      },
    });
  }, []);

  return (
    <Styled.Container>
      <Styled.Waves ref={WaveBack} />
      <Styled.Smoke src={MageBackground} alt="background" />
      <Styled.FlipedSmoke src={MageBackground} alt="background" />
      <Styled.Mage src={Mage} alt="mage" />
      <Styled.WavesFront ref={WaveFront} />
    </Styled.Container>
  );
};

export default WaveBackground;
