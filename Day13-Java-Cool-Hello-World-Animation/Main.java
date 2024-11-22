
public class Main{

  public static void main(String[] args){

    String text = "hello world";

    char[] charLookup = {'x', '#', 'a', 'p', 'q', 'w', 'd','s', 'e', 'h', 'l', '!', 'A', '$', 'v', 'o', 'm', ' ', 'g', 'E', 'j', 't', 'r', 'U', 'o', 'f', '@', 'O', ';', '|', '<'};

    int counter = 0;
    String corretText = "";
    while(counter < text.length() - 1){
      for(int i = 0; i < charLookup.length; i++){
        if (charLookup[i] == text.charAt(counter)){
          corretText += charLookup[i];
          counter++;
        }
        if(corretText.length() == 0){
          System.out.println(charLookup[i]);
        }else if (corretText.length() > 0){
          System.out.println(corretText + charLookup[i]);
        }
      }
    }



  }

}