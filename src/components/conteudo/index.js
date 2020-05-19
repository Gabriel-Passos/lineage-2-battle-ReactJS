import React from 'react';

import './style.css';

export default function Conteudo(){
    return(
      <>
        <div className="container-content">
          <div className="content-content">
            <div className="separator"></div>
            <div className="conten-info-pvp">
              <h1>INFORMAÇÕES GERAIS DOS RATES</h1>
              <p>
              RateXp = 5.<br/>
              RateSp = 5.<br/>
              RatePartyXp = 7.<br/>
              RatePartySp = 7.<br/>
              RateDropAdena = 10<br/>
              RateDropItems = 12<br/>
              RateDropSealStones = 10<br/>
              </p>
              <br/>
              <h1>SPOIL E FISH</h1>

              <p>
              RateDropSpoil = 18<br/>
              RateRaidDropItems = 20<br/>
              RateDropManor = 20<br/>
              RateExtractFish = 20<br/>
              </p>
              <br/>
              <h1>RATE DE QUEST</h1>

              <p>
              RateDropQuest = 15<br/>
              RateQuestsRewardExpSp = 8<br/>
              RateQuestsRewardAdena = 12<br/>
              RateQuestsRewardItems = 12<br/>
              RateCraftCost = 10<br/>
              RateSiegeGuardsPrice = 30<br/>
              </p>
              <br/>

              <h1>Karma (PK)</h1>

              <p>
              KarmaDropLimit = 10<br/>
              KarmaRateDrop = 70<br/>
              KarmaRateDropItem = 50<br/>
              KarmaRateDropEquip = 40<br/>
              KarmaRateDropEquipWeapon = 10<br/>
              RateKarmaExpLost = 20<br/>
              </p>
              <br/>
              <h1>RATE HEBRS</h1>

              <p>
              RateCommonHerbs = 8<br/>
              RateHpMpHerbs = 7<br/>
              RateGreaterHerbs = 4<br/>
              RateSuperiorHerbs = 3<br/>
              RateSpecialHerbs = 5<br/>
              </p>
            </div>
            <div className="separator"></div>
          </div>
        </div>
      </>
    )
}
