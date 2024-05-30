<template>

    <div  class="versesBox" v-if="isVisible" >
      <div v-for="(verse, index) in verses" :key="index" class="cards">
         <v-card>
            <v-card-text>  {{ verse.text }} </v-card-text>
            <v-card-subtitle> {{ verse.info }} </v-card-subtitle>
        </v-card>
      </div>
     </div>
     
</template>


<script>
import { onMounted } from 'vue';

export default {
  name: 'VersesEvent',
  data() {
    return {
      isVisible: false,
      verses: [],
      src: "https://bible-api.com/"
    };
  },
  methods: {

    fetchVerse(passage) {
        fetch(`${this.src}${passage}`)
            .then(response => response.json())
            .then(data => {
                const verse = {
                  text: data.text,
                  info: data.reference
                };

                this.verses.push(verse);
                this.isVisible = true;
            })
            .catch(error => {
                console.error('Error fetching verse', error);
            });

    },

    health() {
      this.fetchVerse("3john+1:2");
      this.fetchVerse("james+5:14-15");
      this.fetchVerse("psalm+41:3");
      this.fetchVerse("jeremiah+33:6");
      this.fetchVerse("psalms+73:26");
    },

    faith() {
      this.verses = [];
      this.fetchVerse("hebrews+11:1");
      this.fetchVerse("galatians+2:16");
      this.fetchVerse("mathew+17:20");
      this.fetchVerse("proverbs+3:5-6");
      this.fetchVerse("jeremiah+29:11");
     },

     finance() {
      this.verses = [];
      this.fetchVerse("2corinthians+9:6");
      this.fetchVerse("hebrews+13:5");
      this.fetchVerse("malachi+3:10");
      this.fetchVerse("1timothy+6:17");
      this.fetchVerse("mathew+25:29");

     },

     love() {
      this.verses = [];
      this.fetchVerse("colossians+3:14");
      this.fetchVerse("romans+8:38-39");
      this.fetchVerse("1corinthians+13:13");
      this.fetchVerse("john+13:34");
      this.fetchVerse("jerimiah+31:3");
     },

     family() {
      this.verses = [];
      this.fetchVerse("1timothy+5:8");
      this.fetchVerse("galatians+3:26");
      this.fetchVerse("ephesians+2:19");
      this.fetchVerse("mathew+12:25");
      this.fetchVerse("colossians+3:15");
     },

     loss() {
      this.verses = [];
      this.fetchVerse("1thessalonians+4:13-14");
      this.fetchVerse("mathew+5:4");
      this.fetchVerse("john+3:16");
      this.fetchVerse("joshua+1:9");
      this.fetchVerse("john+11:25-26");
     },

     anger() {
      this.verses = [];
      this.fetchVerse("ephesians+4:26");
      this.fetchVerse("james+1:19-20");
      this.fetchVerse("mathew+5:22");
      this.fetchVerse("proverbs+16:32");
      this.fetchVerse("psalms+30:5");
     },

     stress() {
      this.verses = [];
      this.fetchVerse("philippians+4:6-7");
      this.fetchVerse("proverbs+3:5-6");
      this.fetchVerse("psalms+23:4");
      this.fetchVerse("jeremiah+29:11");
      this.fetchVerse("mathew+6:34");
     },

     pride() {
      this.verses = [];
      this.fetchVerse("proverbs+11:2");
      this.fetchVerse("romans+12:3");
      this.fetchVerse("galatians+6:4-5");
      this.fetchVerse("isaiah+2:12");
      this.fetchVerse("james+4:6");
     },

     depression() {
      this.verses = [];
      this.fetchVerse("psalms+34:17-18");
      this.fetchVerse("philippians+4:8");
      this.fetchVerse("deuteronomy+31:8");
      this.fetchVerse("psalms+3:3");
      this.fetchVerse("john+16:33");
      this.fetchVerse("1peter+4:12-13");
     },

     onMounted() {
      this.fetchVerse();
      this.health();
      this.faith();
      this.finance();
      this.love();
      this.family();
      this.loss();
      this.anger();
      this.stress();
      this.pride();
      this.depression();
     }
  }


}
</script>


<style>
.versesBox {
  margin: 1.5rem;
}

.cards {
   margin-bottom: 1rem;
}
</style>