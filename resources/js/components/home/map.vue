<template>
    <div>
          <section class="export-area">
          <div class="site-title col-sm-12">
            <h4 class="sub-title">
              Lorem Lorem
            </h4>
            <h2>Export Markets</h2>
          </div>
            <div class="container-full">
              <div class="row export-map">
                <div class="col-md-12 export-area-map d-none d-sm-block">
                  <div class="title col-sm-12">
                    <h4 class="sub-title">
                      {{expt.heading}}
                    </h4>
                    <h2>{{expt.title}}</h2>
                  </div>
                  <img src="img/mapphoto.jpg">
                    <div class="map-location canada">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('canada')" href class="map-point">Canada</a>
                          <div v-if="isExpand == true && selectedCountry == 'canada'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'canada'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('canada')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'canada'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location usa">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('usa')" href class="map-point">USA</a>
                          <div v-if="isExpand == true && selectedCountry == 'usa'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'usa'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('usa')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'usa'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location nicaragua">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('nicaragua')" href class="map-point">Nicaragua</a>
                          <div v-if="isExpand == true && selectedCountry == 'nicaragua'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'nicaragua'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('nicaragua')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'nicaragua'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location dominicanrepublic">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('dominicanrepublic')" href class="map-point">Dominic Republic</a>
                          <div v-if="isExpand == true && selectedCountry == 'dominicanrepublic'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'dominicanrepublic'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('dominicanrepublic')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'dominicanrepublic'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location brazil">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('brazil')" href class="map-point">Brazil</a>
                          <div v-if="isExpand == true && selectedCountry == 'brazil'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'brazil'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('brazil')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'brazil'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location ireland">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('ireland')" href class="map-point">Ireland</a>
                          <div v-if="isExpand == true && selectedCountry == 'ireland'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'ireland'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('ireland')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'ireland'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location switzerland">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('switzerland')" href class="map-point">Switzerland</a>
                          <div v-if="isExpand == true && selectedCountry == 'switzerland'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'switzerland'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('switzerland')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'switzerland'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                   <div class="map-location germany">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('germany')" href class="map-point">Germany</a>
                          <div v-if="isExpand == true && selectedCountry == 'germany'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'germany'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('germany')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'germany'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    
                   <div class="map-location france">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('france')" href class="map-point">France</a>
                          <div v-if="isExpand == true && selectedCountry == 'france'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'france'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('france')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'france'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location spain">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('spain')" href class="map-point">Spain</a>
                          <div v-if="isExpand == true && selectedCountry == 'spain'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'spain'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('spain')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'spain'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location portugal">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('portugal')" href class="map-point">Portugal</a>
                          <div v-if="isExpand == true && selectedCountry == 'portugal'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'portugal'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('portugal')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'portugal'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location sweden">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('sweden')" href class="map-point">Sweden</a>
                          <div v-if="isExpand == true && selectedCountry == 'sweden'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'sweden'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('sweden')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'sweden'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location netherlands">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('netherlands')" href class="map-point">Netherlands</a>
                          <div v-if="isExpand == true && selectedCountry == 'netherlands'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'netherlands'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('netherlands')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'netherlands'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location uk" >
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('uk')" href class="map-point">U.K</a>
                          <div v-if="isExpand == true && selectedCountry == 'uk'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'uk'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('uk')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'uk'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location denmark">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('denmark')" href class="map-point">Denmark</a>
                          <div v-if="isExpand == true && selectedCountry == 'denmark'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'denmark'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('denmark')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'denmark'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location belgium">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('belgium')" href class="map-point">Belgium</a>
                          <div v-if="isExpand == true && selectedCountry == 'belgium'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'belgium'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('belgium')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'belgium'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location slovakia">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('slovakia')" href class="map-point">Slovakia</a>
                          <div v-if="isExpand == true && selectedCountry == 'slovakia'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'slovakia'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('slovakia')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'slovakia'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location poland">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('poland')" href class="map-point">Poland</a>
                          <div v-if="isExpand == true && selectedCountry == 'poland'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'poland'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('poland')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'poland'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location czechrepublic">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('czechrepublic')" href class="map-point">Czech Republic</a>
                          <div v-if="isExpand == true && selectedCountry == 'czechrepublic'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'czechrepublic'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('czechrepublic')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'czechrepublic'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location hungary">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('hungary')" href class="map-point">Hungary</a>
                          <div v-if="isExpand == true && selectedCountry == 'hungary'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'hungary'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('hungary')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'hungary'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location austria">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('austria')" href class="map-point">Austria</a>
                          <div v-if="isExpand == true && selectedCountry == 'austria'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'austria'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('austria')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'austria'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location romania">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('romania')" href class="map-point">Romania</a>
                          <div v-if="isExpand == true && selectedCountry == 'romania'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'romania'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('romania')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'romania'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location italy">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('italy')" href class="map-point">Italy</a>
                          <div v-if="isExpand == true && selectedCountry == 'italy'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'italy'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('italy')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'italy'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location slovenia">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('slovenia')" href class="map-point">Slovenia</a>
                          <div v-if="isExpand == true && selectedCountry == 'slovenia'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'slovenia'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('slovenia')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'slovenia'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location bulgaria">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('bulgaria')" href class="map-point">Bulgaria</a>
                          <div v-if="isExpand == true && selectedCountry == 'bulgaria'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'bulgaria'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('bulgaria')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'bulgaria'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location greece">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('greece')" href class="map-point">Greece</a>
                          <div v-if="isExpand == true && selectedCountry == 'greece'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'greece'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('greece')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'greece'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location croatia">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('croatia')" href class="map-point">Croatia</a>
                          <div v-if="isExpand == true && selectedCountry == 'croatia'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'croatia'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('croatia')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'croatia'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location cyprus">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('cyprus')" href class="map-point">Cyprus</a>
                          <div v-if="isExpand == true && selectedCountry == 'cyprus'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'cyprus'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('cyprus')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'cyprus'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location saudi">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('saudi')" href class="map-point">Saudi Arabia</a>
                          <div v-if="isExpand == true && selectedCountry == 'saudi'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'saudi'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('saudi')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'saudi'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location yemen">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('yemen')" href class="map-point">Yemen</a>
                          <div v-if="isExpand == true && selectedCountry == 'yemen'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'yemen'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('yemen')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'yemen'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location somalia">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('somalia')" href class="map-point">Somalia</a>
                          <div v-if="isExpand == true && selectedCountry == 'somalia'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'somalia'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('somalia')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'somalia'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location sudan">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('sudan')" href class="map-point">Sudan</a>
                          <div v-if="isExpand == true && selectedCountry == 'sudan'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'sudan'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('sudan')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'sudan'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location iran">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('iran')" href class="map-point">Iran</a>
                          <div v-if="isExpand == true && selectedCountry == 'iran'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'iran'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('iran')" href class="map-pointiran">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'iran'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location qatar">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('qatar')" href class="map-point">Qatar</a>
                          <div v-if="isExpand == true && selectedCountry == 'qatar'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'qatar'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('qatar')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'qatar'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location bahrain">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('bahrain')" href class="map-point">Bahrain</a>
                          <div v-if="isExpand == true && selectedCountry == 'bahrain'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'bahrain'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('bahrain')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'bahrain'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location kuwait">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('kuwait')" href class="map-point">Kuwait</a>
                          <div v-if="isExpand == true && selectedCountry == 'kuwait'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'kuwait'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('kuwait')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'kuwait'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>

                   <div class="map-location uae">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('uae')" href class="map-point">U.A.E</a>
                          <div v-if="isExpand == true && selectedCountry == 'uae'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'uae'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('uae')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'uae'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>

                    <div class="map-location napal">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('nepal')" href class="map-point">Nepal</a>
                          <div v-if="isExpand == true && selectedCountry == 'nepal'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'nepal'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('nepal')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'nepal'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>

                    <div class="map-location india">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('india')" href class="map-point">India</a>
                          <div v-if="isExpand == true && selectedCountry == 'india'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'india'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('india')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'india'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>

                    <div class="map-location maldives">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('maldives')" href class="map-point">Maldives</a>
                          <div v-if="isExpand == true && selectedCountry == 'maldives'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'maldives'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('maldives')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'maldives'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                   <div class="map-location myanmar">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('myanmar')" href class="map-point">Myanmar</a>
                          <div v-if="isExpand == true && selectedCountry == 'myanmar'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'myanmar'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('myanmar')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'myanmar'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>

                    <div class="map-location thailand">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('thailand')" href class="map-point">Thailand</a>
                          <div v-if="isExpand == true && selectedCountry == 'thailand'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'thailand'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('thailand')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'thailand'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>

                    <div class="map-location malaysia">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('malaysia')" href class="map-point">Malaysia</a>
                          <div v-if="isExpand == true && selectedCountry == 'malaysia'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'malaysia'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('malaysia')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'malaysia'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>

                    <div class="map-location singapore">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('singapore')" href class="map-point">Singapore</a>
                          <div v-if="isExpand == true && selectedCountry == 'singapore'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'singapore'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('singapore')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'singapore'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location tasttimor">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('tasttimor')" href class="map-point">East Timor</a>
                          <div v-if="isExpand == true && selectedCountry == 'tasttimor'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'tasttimor'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('tasttimor')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'tasttimor'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location australia">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('australia')" href class="map-point">Australia</a>
                          <div v-if="isExpand == true && selectedCountry == 'australia'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'australia'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('australia')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'australia'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location newZealand">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('newZealand')" href class="map-point">New Zealand</a>
                          <div v-if="isExpand == true && selectedCountry == 'newZealand'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'newZealand'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('newZe land')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'newZealand'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location southkorea">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('southkorea')" href class="map-point">South Korea</a>
                          <div v-if="isExpand == true && selectedCountry == 'southkorea'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'southkorea'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('southkorea')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'southkorea'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location japan">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('japan')" href class="map-point">Japan</a>
                          <div v-if="isExpand == true && selectedCountry == 'japan'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'japan'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('japan')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'japan'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location cambadia">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('cambadia')" href class="map-point">Cambodia</a>
                          <div v-if="isExpand == true && selectedCountry == 'cambadia'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'cambadia'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('cambadia')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'cambadia'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="map-location philippines">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a @click.prevent="doSomething('philippines')" href class="map-point">Philippines</a>
                          <div v-if="isExpand == true && selectedCountry == 'philippines'" class="map-location-details">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div v-if="isExpand == false || selectedCountry != 'philippines'" class="map-colm-sec2">
                        <a @click.prevent="doSomething('philippines')" href class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div v-if="isExpand == true && selectedCountry == 'philippines'" class="map-colm-sec2">
                        <a @click.prevent="resetThings" href class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                </div>

                <!-- Next Area for medium-->
                <div class="col-md-12 export-area-map d-block d-sm-none">
                  <img src="img/mapphoto.jpg">
                    <div class="maplocation canada-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Canada</a>
                          <div class="map-location-details" id="canada" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div class="map-colm-sec2">
                        <a href="#" class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div class="map-colm-sec2" style="display: none;">
                        <a href="#" class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="maplocation usa-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Usa</a>
                          <div class="map-location-details" id="usa" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div class="map-colm-sec2">
                        <a href="#" class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div class="map-colm-sec2" style="display: none;">
                        <a href="#" class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="maplocation maxico-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Mexico</a>
                          <div class="map-location-details" id="mexico" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                      <div class="map-colm-sec2">
                        <a href="#" class="map-point">
                          <img src="img/plus.png" alt="">
                        </a>
                      </div>
                      <div class="map-colm-sec2" style="display: none;">
                        <a href="#" class="map-point">
                          <img src="img/minus.png" alt="">
                        </a>
                      </div>
                      </div>
                    </div>
                    <div class="maplocation nicaragua-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Nicaragua</a>
                          <div class="map-location-details" id="nicaragua" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation dominicanrepublic-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Dominican Republic</a>
                          <div class="map-location-details" id="dominicanrepublic" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation brazil-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Brazil</a>
                          <div class="map-location-details" id="brazil" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation ireland-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Ireland</a>
                          <div class="map-location-details" id="ireland" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation switzerland-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Switzerland</a>
                          <div class="map-location-details" id="switzerland" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div class="maplocation germany-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Germany</a>
                          <div class="map-location-details" id="germany" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation france-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Faance</a>
                          <div class="map-location-details" id="france" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation spain-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Spain</a>
                          <div class="map-location-details" id="switzerland" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation portugal-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Portugal</a>
                          <div class="map-location-details" id="switzerland" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation sweden-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Sweden</a>
                          <div class="map-location-details" id="sweden" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation netherlands-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Netherlands</a>
                          <div class="map-location-details" id="netherlands" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation uk-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">U.K</a>
                          <div class="map-location-details" id="uk" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation denmark-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Denmark</a>
                          <div class="map-location-details" id="denmark" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation belgium-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Belgium</a>
                          <div class="map-location-details" id="belgium" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation slovakia-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Slovakia</a>
                          <div class="map-location-details" id="slovakia " style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation  poland-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point"> Poland</a>
                          <div class="map-location-details" id=" poland" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation czechrepublic-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Czech Republic </a>
                          <div class="map-location-details" id="czechrepublic" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation hungary-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Hungary</a>
                          <div class="map-location-details" id="hungary" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation austria-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Austria</a>
                          <div class="map-location-details" id="austria" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation romania-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Romania</a>
                          <div class="map-location-details" id="romania" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation italy-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Italy</a>
                          <div class="map-location-details" id="italy" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation  slovenia-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Slovenia</a>
                          <div class="map-location-details" id=" slovenia" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation bulgaria-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Bulgaria</a>
                          <div class="map-location-details" id="bulgaria" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation greece-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Greece</a>
                          <div class="map-location-details" id="greece" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation croatia-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Croatia</a>
                          <div class="map-location-details" id="croatia" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation cyprus-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Cyprus</a>
                          <div class="map-location-details" id="cyprus" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation saudi-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Saudi Arabia</a>
                          <div class="map-location-details" id="saudi" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation yemen-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Yemen</a>
                          <div class="map-location-details" id="yemen" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation somalia-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Somalia</a>
                          <div class="map-location-details" id="somalia" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation sudan-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Sudan</a>
                          <div class="map-location-details" id="sudan" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation iran-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Iran</a>
                          <div class="map-location-details" id="iran" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation qatar-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Qatar</a>
                          <div class="map-location-details" id="qatar" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="maplocation bahrain-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Bahrain</a>
                          <div class="map-location-details" id="bahrain" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="maplocation kuwait-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Kuwait</a>
                          <div class="map-location-details" id="kuwait" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="maplocation uae-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">UAE</a>
                          <div class="map-location-details" id="uae" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="maplocation napal-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Napal</a>
                          <div class="map-location-details" id="napal" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="maplocation india-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">India</a>
                          <div class="map-location-details" id="india" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="maplocation maldives-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Maldives</a>
                          <div class="map-location-details" id="maldives" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="maplocation myanmar-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Myanmar</a>
                          <div class="map-location-details" id="myanmar" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="maplocation thailand-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Thailand</a>
                          <div class="map-location-details" id="thailand" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="maplocation malaysia-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Malaysia</a>
                          <div class="map-location-details" id="iran" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="maplocation singapore-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Singapore</a>
                          <div class="map-location-details" id="singapore" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation tasttimor-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">East Timor</a>
                          <div class="map-location-details" id="tasttimor" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation australia-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Australia</a>
                          <div class="map-location-details" id="australia" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation newZealand-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">NewZealand</a>
                          <div class="map-location-details" id="newZealand" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation southkorea-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">South Korea</a>
                          <div class="map-location-details" id="southkorea" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation japan-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Japan</a>
                          <div class="map-location-details" id="japan" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation cambadia-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Cambodia</a>
                          <div class="map-location-details" id="cambadia" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="maplocation philippines-m">
                      <div class="map-colm">
                        <div class="map-colm-sec1"><a href="javascript:void(0);" class="map-point">Philippines</a>
                          <div class="map-location-details" id="philippines" style="display: none;">
                            <ul class="india-colm">
                                <li><a href="/businesses/companies/novelis-inc">Novelis</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Cell Inc</a></li>
                                <li><a href="/businesses/companies/av-group-nb">AV Nackawic Inc</a></li>
                                
                            </ul>
                          </div>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/plus.png" alt="">
                          </a>
                        </div>
                        <div class="map-colm-sec2" style="display: none;">
                          <a href="#" class="map-point">
                            <img src="img/minus.png" alt="">
                          </a>
                        </div>
                      </div>
                    </div>



                </div>
              </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
  created() {
    this.getData()

    this.$root.$on('english', (e) => {
        this.form.lang = e
        axios.get('http://192.168.1.6:8002/api/getExport', {params: this.form})
            .then(({data}) => {
                this.expt = data
            })
    })

    this.$root.$on('arabic', (e) => {
        this.form.lang = e
        axios.get('http://192.168.1.6:8002/api/getExport', {params: this.form})
            .then(({data}) => {
                this.expt = data
            })
    })

    
  },
  data() {
    return {
      expt: {},
      isExpand: false,
      selectedCountry: '',

      form: {
          lang: '',
          
      }
    }
  },
  methods: {
    getData(){
        this.form.lang = 'English'
        axios.get('http://192.168.1.6:8002/api/getExport', {params: this.form})
          .then(({data}) => {
            this.expt = data
          })
    },
    doSomething(country){
      this.isExpand = true
      this.selectedCountry = country
    },
    resetThings(){
      this.isExpand = false
      this.selectedCountry = ''
    }
  }
}
</script>

<style scoped>
    /** map  Area  Start **/
.export-area-map .title {
	position: absolute;
	color: #fff;
	text-align: right;
	right: 23%;
	top: 8%;
}
.title h4 {
	font-size: 18px;
	position: relative;
}
.title h4::before {
	position: absolute;
	width: 63px;
	height: 2px;
	background: #fff;
	top: 10px;
	left: 101%;
	content: "";
}
.title h2 {
	font-size: 48px;
}
.map-location {
	background: #fff;
	padding: 4px;
	max-width: 500px;
	position: absolute;
	z-index: 9;
}
.map-colm-sec2 {
	padding: 8px 12px;
	position: relative;
}
.map-colm-sec1 {
	padding-right: 8px;
	border-right: 1px solid #c5dbdf;
}
.map-colm {
	display: flex;
}
.map-colm-sec2 img {
	width: 15px;
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 2px;
	right: 0;
	margin: auto;
}
.map-colm .map-colm-sec1 a{
	font-size: 14px;
	color: #000 !important;
	text-decoration: none;
}
.canada {
	top: 30%;
	left: 20%;
}
.usa {
	top: 46%;
	left: 20%;
}
.mexico {
	left: 12%;
	top: 54%;
}
.nicaragua {
	left: 15%;
	top: 60%;
}
.dominicanrepublic {
	top: 53%;
	left: 26%;
}
.brazil {
	top: 67%;
	left: 30%;
}
.ireland {
	top: 34%;
	left: 37%;
}
.switzerland{
	top: 38%;
left: 36%;
}
.germany{
	top: 42%;
left: 36%;
}
.france{
	top: 46%;
left: 37%;
}
.spain{
	top: 50%;
	left: 36%;
}
.portugal{
	top: 54%;
	left: 36%;
}
.sweden {
	top: 28%;
	left: 43%;
}
.netherlands {
	top: 32%;
	left: 42%;
}
.denmark {
	top: 40%;
	left: 42%;
}
.belgium {
	top: 43%;
	left: 43%;
}
.uk {
	top: 36%;
	left: 43%;
}
.slovakia {
	top: 40%;
	left: 48%;
}
.poland {
	top: 37%;
	left: 49%;
}
.czechrepublic {
	top: 43%;
	left: 48%;
}
.hungary {
	top: 40%;
	left: 54%;
}
.austria {
	top: 46%;
	left: 43%;
}
.romania{
	top: 46%;
	left: 48%;
}
.italy{
	top: 49%;
	left: 43%;
}
.slovenia{
	top: 49%;
	left: 47%;
}
.bulgaria{
	top: 49%;
	left: 52%;
}
.greece {
	top: 52%;
	left: 47%;
}
.croatia {
	top: 52%;
	left: 52%;
}
.cyprus{
	top: 55%;
	left: 52%;
}
.saudi{
	top: 58%;
left: 48%;
}
.yemen{
	top: 61%;
left: 53%;
}
.somalia{
	top: 64%;
left: 52%;
}
.sudan{
	top: 67%;
left: 52%;
}
.iran{
	top: 52%;
	left: 57%;	
}
.qatar{
	top: 55%;
	left: 57%;	
}
.bahrain{
	top: 58%;
	left: 57%;	
}
.kuwait{
	top: 61%;
	left: 58%;	
}
.uae{
	top: 64%;
	left: 58%;	
}
.napal{
	top: 50%;
	left: 61%;
}
.india{
	top: 55%;
left: 62%;
}
.maldives{
	top: 64%;
left: 62%;
}
.myanmar{
	top: 55%;
left: 67%;
}
.thailand{
	top: 58%;
	left: 70%;
}
.malaysia{
	top: 63%;
left: 71%;
}
.singapore{
	top: 71%;
right: 27%;
}
.australia{
	top: 75%;
right: 22%;
}
.newZealand{
	top: 90%;
right: 15%;
}
.southkorea{
	top: 46%;
right: 16%;
}
.japan{
	top: 50%;
right: 19%;
}
.cambadia{
	top: 53%;
right: 22%;
}
.philippines{
	top: 56%;
right: 19%;
}
.tasttimor {
	top: 67%;
	left: 72%;
}
.site-title{
	display: none;
	text-align: center;
}
.site-title h2 {
	font-size: 26px !important;
	font-size: 16px;
display: inline-block;
position: relative;
}
.site-title h4.sub-title {
	font-size: 16px;
	position: relative;
}
.site-title h4.sub-title::before {
	content: "";
	display: block;
	height: 2px;
	width: 63px;
	background: #354e8d;
	top: 10px;
	left: 108%;
	position: absolute;
}
</style>