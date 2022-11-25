<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-12">
        <q-icon name="account_circle" size="15rem" class="q-ml-auto q-mr-auto block"></q-icon>
        <h3 class="text-center q-mt-none q-mb-md">Christian De Santis</h3>
        <p class="text-center q-mt-none">Desarrollador Full Stack</p>
      </div>
    </div>

    <div class="q-pa-md">
      <q-expansion-item switch-toggle-side>
        <template v-slot:header>
          <h6 class="q-my-none q-mr-lg">Typescript</h6>
          <q-linear-progress :value="0.97" class="q-mt-md" />
        </template>
        <div class="q-ma-md">
          <div>Frameworks:</div>
          <ul>
            <li>VueJS v3 (Frontend)</li>
            <li>NestJS (Backend)</li>
          </ul>
        </div>
      </q-expansion-item>
    </div>

    <div class="q-pa-md">
      <q-expansion-item switch-toggle-side>
        <template v-slot:header>
          <h6 class="q-my-none q-mr-lg">PHP</h6>
          <q-linear-progress :value="0.85" class="q-mt-md" color="purple" />
        </template>
        <div class="q-ma-md">
          <div>Frameworks:</div>
          <ul>
            <li>Laravel (MVC)</li>
          </ul>
        </div>
      </q-expansion-item>
    </div>

    <div class="q-pa-md">
      <q-expansion-item switch-toggle-side>
        <template v-slot:header>
          <h6 class="q-my-none q-mr-lg">Python</h6>
          <q-linear-progress :value="0.3" class="q-mt-md" color="yellow" />
        </template>
        <div class="q-ma-md">
          <div>Frameworks:</div>
          <ul>
            <li>Flask (Backend)</li>
          </ul>
        </div>
      </q-expansion-item>
    </div>

    <div class="q-pa-md">
      <q-expansion-item switch-toggle-side>
        <template v-slot:header>
          <h6 class="q-my-none q-mr-lg">Swift</h6>
          <q-linear-progress :value="0.6" class="q-mt-md" color="pink" />
        </template>
        <div class="q-ma-md">
          <div>Frameworks:</div>
          <ul>
            <li>SwiftUI (iOS)</li>
          </ul>
        </div>
      </q-expansion-item>
    </div>

    <div class="q-pa-md">
      <q-expansion-item switch-toggle-side>
        <template v-slot:header>
          <h6 class="q-my-none q-mr-lg">Java</h6>
          <q-linear-progress :value="0.2" class="q-mt-md" color="red-8" />
        </template>
        <div class="q-ma-md">
          <div>N/A</div>
        </div>
      </q-expansion-item>
    </div>

    <div class="q-pa-md">
      <q-expansion-item switch-toggle-side>
        <template v-slot:header>
          <h6 class="q-my-none q-mr-lg">SQL</h6>
          <q-linear-progress :value="0.9" class="q-mt-md" color="grey" />
        </template>
        <div class="q-ma-md">
          <div>Engine:</div>
          <ul>
            <li>MySQL</li>
          </ul>
        </div>
      </q-expansion-item>
    </div>

    <div class="q-pa-md">
      <q-expansion-item switch-toggle-side>
        <template v-slot:header>
          <h6 class="q-my-none q-mr-lg">NoSQL</h6>
          <q-linear-progress :value="0.75" class="q-mt-md" color="green" />
        </template>
        <div class="q-ma-md">
          <div>Engine:</div>
          <ul>
            <li>MongoDB</li>
            <li>Firestore</li>
            <li>DynamoDB</li>
          </ul>
        </div>
      </q-expansion-item>
    </div>

    <div class="row justify-evenly q-mt-xl">
      <div class="col-md-5 q-mb-lg" id="actividad-1">
        <q-card class="my-card" flat bordered>
          <q-img
            src="https://firebasestorage.googleapis.com/v0/b/diseno-web-urbe.appspot.com/o/img-1.png?alt=media&token=ab3b8005-412a-4ea2-8cae-66c91e6fb964"
          />

          <q-card-section>
            <div class="text-overline text-orange-9">Múltiples Páginas</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Actividad 1</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="Github" href="https://github.com/christiandesantis/diseno-web-urbe-1.git" target="_blank" />
            <q-btn flat color="primary" label="Ir al sitio web" disabled/>

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-md-5 q-mb-lg" id="actividad-2">
        <q-card class="my-card" flat bordered>
          <q-img
            src="https://firebasestorage.googleapis.com/v0/b/diseno-web-urbe.appspot.com/o/img-2.png?alt=media&token=c36b4504-e9e2-4444-b3a6-4a9545e22d5d"
          />

          <q-card-section>
            <div class="text-overline text-orange-9">Onepage</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Actividad 2</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="Github" href="https://github.com/christiandesantis/diseno-web-urbe-2.git" target="_blank" />
            <q-btn flat color="primary" label="Ir al sitio web" disabled/>

            <q-space />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-md-5 q-mb-lg" id="actividad-3">
        <q-card class="my-card" flat bordered>
          <q-img
            src="https://firebasestorage.googleapis.com/v0/b/diseno-web-urbe.appspot.com/o/img-5.png?alt=media&token=35b72a7f-9309-45b3-93d9-0ccd7eb5dded"
          />

          <q-card-section>
            <div class="text-overline text-orange-9">Shopping Cart</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Actividad 3</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="Github" href="https://github.com/christiandesantis/diseno-web-urbe-3.git" target="_blank" />
            <q-btn flat color="primary" label="Ir al sitio web" disabled/>

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div class="row justify-evenly">
      <div class="col-md-5 q-mb-lg" id="actividad-4">
        <q-card class="my-card" flat bordered>
          <q-img
            src="https://firebasestorage.googleapis.com/v0/b/diseno-web-urbe.appspot.com/o/img-3.png?alt=media&token=5b225f1b-f694-400f-866f-5901019cc3ed"
          />

          <q-card-section>
            <div class="text-overline text-orange-9">Modas</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Actividad 4</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="Github" href="https://github.com/christiandesantis/diseno-web-urbe-portafolio.git" target="_blank" />
            <q-btn flat color="primary" to=/modas label="Ir al sitio web" />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-md-5 q-mb-lg" id="actividad-5">
        <q-card class="my-card" flat bordered>
          <q-img
            src="https://firebasestorage.googleapis.com/v0/b/diseno-web-urbe.appspot.com/o/img-4.png?alt=media&token=8a13f9f1-cd8a-49f3-a254-2fb6148c628a"
          />

          <q-card-section>
            <div class="text-overline text-orange-9">Cryptomonedas</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Actividad 5</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn flat color="dark" label="Github" href="https://github.com/christiandesantis/diseno-web-urbe-portafolio.git" target="_blank" />
            <q-btn flat color="primary" to="/crypto"  label="Ir al sitio web" />

            <q-space />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
</script>
