import java.math.BigInteger;
import java.util.Scanner;

public class Fibonacci{

  public static void main(String[] args){

    Scanner input = new Scanner(System.in);

    int nthFibonacci;

    System.out.print("Enter the nth fibonacci: ");
    nthFibonacci = input.nextInt();
    
    int counter = 0;
    BigInteger num1 = BigInteger.ZERO;
    BigInteger num2 = BigInteger.ONE;
    
    while(true){
      if(counter == nthFibonacci){
        break;
      }
      
      if(counter == 0){
        System.out.println(counter + ": " + num1);
      }
      if(counter == 1){
        System.out.println(counter + ": " + num2);
        
      }
      if(counter >= 2){
        BigInteger next = num1.add(num2);
        num1 = num2;
        num2 = next;
        System.out.println(counter + ": " + next);
      }
      
      counter++;


    }

    input.close();
  }

}