import java.util.Scanner;

class Test {
    public static void main(String args[]) {
        //System.out.println("Hello, world!");

        String foo = "";
        Scanner scan = new Scanner(System.in);

        System.out.print("Input text: ");
        foo = scan.nextLine();
        System.out.println("Result: "+foo);
    }
}
