export interface ChampionInterface {
  championDifficulty: string,
  championUrl: string,
  championName: string,
  championLore: string,
  championIcon: string,
  championSplash: string,
  championTitle: string,
  championLanes?: ChampionLanes,
  championSkins?: ChampionSkins,
  championSkill?: ChampionSkills,
}

export interface ChampionLanes {
  adc: string | boolean,
  jungle: string | boolean,
  mage: string | boolean,
  support: string | boolean,
  top: string | boolean,
}

export interface ChampionSkins {
  skins: {
    skinName: string,
    skinUrl: string
  }
}

export interface SkillsDefaultsValues {
  skillDescription: string,
  skillName: string,
  skillImage: string,
  skillVideo: string
}

export interface ChampionSkills {
  passive: SkillsDefaultsValues,
  q: SkillsDefaultsValues,
  w: SkillsDefaultsValues,
  e: SkillsDefaultsValues,
  r: SkillsDefaultsValues
}
