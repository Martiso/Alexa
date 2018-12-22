const skille = [
    {
        prefix: 'kolor niebieski',
        skill: function(){
            document.body.style.backgroundColor = 'blue'
        }
    },
    {
        prefix: 'mów',
        skill: function(){
            msg.text = `Litwo, Ojczyzno moja!`
             window.speechSynthesis.speak(msg)
       }
    },
    {
       prefix: 'bitboksuje',
       skill: function(){
           msg.text = `pumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłupumpumcympumpumpumcympuiłuiłuiłuiłu`
           window.speechSynthesis.speak(msg)
        }      
    }
];

let voices = []
const msg = new SpeechSynthesisUtterance();
function execute(command){
    const run = skille.find( (skill)=> command.includes(skill.prefix) );
    run.skill()
}


window.speechSynthesis.addEventListener('voicechanged', (e)=>{
    voices = window.speechSynthesis.getVoices();
    msg.lang = voices [0];
})