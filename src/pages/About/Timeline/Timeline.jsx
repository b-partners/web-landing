import React from 'react';

import { Polygone } from './Polygone';
import './Timeline.css';

export function Timeline() {
  return (
    <div className="timeline">
      <Polygone
        description="Lancement des rencontres avec les artisans en fin 2022."
        color="rgba(156, 37, 90, 1)"
        position="polygone-up"
        borderLeft="polygone-border-left"
      />
      <Polygone
        description="Création de la société en début 2023, lancement des développements IT."
        color="rgba(165, 58, 106, 1)"
        position="polygone-down"
      />
      <Polygone description="Interviews des artisans testeurs." color="rgba(175, 79, 122, 1)" position="polygone-up" />
      <Polygone
        description="Juin 2023 : Commercialisation auprès des artisans."
        color="rgba(197, 129, 161, 1)"
        position="polygone-down"
      />
      <Polygone
        description="Septembre 2023 : Commercialisation auprès des collectivités."
        color="rgba(213, 164, 188, 1)"
        position="polygone-up"
        borderLeft="polygone-border-right"
      />
    </div>
  );
}
