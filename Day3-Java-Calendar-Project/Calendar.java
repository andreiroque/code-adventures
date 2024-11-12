import java.time.LocalDate;
import java.util.Scanner;

public class Calendar{

  public static void main(String[] args){

    Scanner input = new Scanner(System.in);

    int yearInput;

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

  }

}