import React from 'react';

import { Polygone } from '../Timeline/Polygone';

export function ResponsiveTimeline() {
  return (
    <div className="responsive-timeline">
      <Polygone
        description="Lancement des rencontres avec les artisans en S2 2022."
        color="rgba(156, 37, 90, 1)"
        position="polygone-right"
        borderLeft="polygone-border-left"
        preset="responsive-width"
      />
      <Polygone
        description="Création de la société en Juillet 2022, lancement des développements IT."
        color="rgba(165, 58, 106, 1)"
        position="polygone-left"
        preset="responsive-width"
      />
      <Polygone description="Interviews des artisans testeurs." color="rgba(175, 79, 122, 1)" position="polygone-right" preset="responsive-width" />
      <Polygone description="Novembre 2022 : Commercialisation." color="rgba(197, 129, 161, 1)" position="polygone-left" preset="responsive-width" />
      <Polygone
        description="Décembre 2022 : Lancement d’un programme de R&D."
        color="rgba(213, 164, 188, 1)"
        position="polygone-right"
        borderLeft="polygone-border-right"
        preset="responsive-width"
      />
    </div>
  );
}
