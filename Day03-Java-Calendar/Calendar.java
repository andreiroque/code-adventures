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
        System.out.println("Sun\tMon\tTue\tWed\tThu\tFri\tSat");


        // Gets the start of the week
        // (date.getDayOfWeek().getValue() will return
        // an int from 0-Monday ... 7-Sunday)
        int startOfWeek = date.getDayOfWeek().getValue();
        // Calculating what day is the start of the week.
        startOfWeek %= 7;

        // Will print spaces in the start of the month
        // to have a calendar-like design/style output
        for(int spaces = 0; spaces < startOfWeek; spaces++){
          System.out.print("\t");
        }

        for(int day = 1; day <= date.lengthOfMonth(); day++){
          System.out.print(day + "\t");
          // Check to see if the day reaches sat
          // and pushes the next day to the next line.
          if((day + startOfWeek) % 7 == 0){
            System.out.println();
          }
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