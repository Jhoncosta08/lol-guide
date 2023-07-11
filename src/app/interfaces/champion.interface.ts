export interface ChampionInterface {
  championUrl: string,
  championName: string,
  championLore: string,
  championIcon: string,
  championSplash: string,
  championTitle: string,
  championLanes?: ChampionLanes,
  championSkins?: ChampionSkins,
  championSkills?: ChampionSkills,
}

export interface ChampionLanes {
  championLane: string[]
}

export interface ChampionSkins {
  skins: [{
    name: string,
    imageUrl: string
  }]
}

export interface SkillsDefaultsValues {
  description: string,
  icon: string,
  name: string,
  poster: string,
  video: string
}

export interface ChampionSkills {
  championPassive: SkillsDefaultsValues,
  championQ: SkillsDefaultsValues,
  championW: SkillsDefaultsValues,
  championE: SkillsDefaultsValues,
  championR: SkillsDefaultsValues
}
