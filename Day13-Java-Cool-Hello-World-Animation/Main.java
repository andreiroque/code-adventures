import java.util.Random;

public class Main{

  public static void main(String[] args){

    String text = "Hello, World!";

    char[] charLookup = {'x', '#', 'a', 'H', 'p', ',', 'q', 'w', 'd','s', 'e', 'h', 'l', '!', 'A', '$', 'v', 'o', 'm', ' ', 'g', 'E', 'j', 'W','t', 'r', 'U', 'o', 'f', '@', 'O', ';', '^', '<'};
    int counter = 0;
    Random rand = new Random();

    try{

      String correctText = "";
      while(counter < text.length()){
        char randomChar = charLookup[rand.nextInt(charLookup.length)];
        if(correctText.equals("")){
          System.out.println(randomChar);
        }else{
          System.out.println(correctText + randomChar);
        }
        Thread.sleep(10);
        if(text.charAt(counter) == randomChar){
          correctText += randomChar;
          counter++;
        }
      }
      
    }catch(Exception e){
      System.out.println("Error: " + e);
    }


  }

}