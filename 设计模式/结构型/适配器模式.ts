 interface MediaPlayer {
     play(audioType:string, fileName:string):void;
 }
 
 interface AdvancedMediaPlayer { 
      playVlc(fileName:string):void;
      playMp4(fileName:string):void;
 }
  class VlcPlayer implements AdvancedMediaPlayer{
    public playVlc(fileName):void {
       console.log("Playing vlc file. Name: "+ fileName);      
    }
    public  playMp4(fileName:string):void {
       //什么也不做
    }
 }
  class Mp4Player implements AdvancedMediaPlayer{
    constructor(){

    }
    playVlc(fileName):void {
       //什么也不做  
    }
    playMp4(fileName:string):void {
        console.log("Playing mp4 file. Name: "+ fileName);      
    }
 }
 class MediaAdapter implements MediaPlayer {
 
     advancedMusicPlayer:AdvancedMediaPlayer;
  
    public MediaAdapter(audioType:string){
       if(audioType==="vlc"){
          this.advancedMusicPlayer = new VlcPlayer();       
       } else if (audioType === "mp4"){
          this.advancedMusicPlayer = new Mp4Player();
       }  
    }
    public  play( audioType:string, fileName:string):void {
       if(audioType === "vlc"){
          this.advancedMusicPlayer.playVlc(fileName);
       }else if(audioType === "mp4"){
          this.advancedMusicPlayer.playMp4(fileName);
       }
    }
 }