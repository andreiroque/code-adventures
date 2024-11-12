import java.time.LocalDate;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Calendar{

  public static void main(String[] args){

    Scanner input = new Scanner(System.in);

    int yearInput;
    
    try{
      System.out.print("Enter a year: ");
      yearInput = input.nextInt();
  
      for(int month = 1; month <= 12; month++){
        LocalDate date = LocalDate.of(yearInput, month, 1);
        System.out.println(date.getMonth());
        for(int day = 1; day <= date.lengthOfMonth(); day++){
          System.out.print(day + " ");
        }
        System.out.println();
        System.out.println();
      }

    }catch(InputMismatchException e){
      input.nextLine();
      System.out.println("\nError: " + e);
      System.out.println("Please enter a YEAR ...\n");
      //Loop back to main to restart the process.
      main(args); //Remove the "args" if you get an error.

    }finally{
      input.close();
    }

  }

}