package IBM;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

class Main3 {
    public static String reverseWords(String s) {
        String[] words = s.split("");

        StringBuilder sb = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            sb.append(words[i] + " ");
        }
        return sb.toString().trim();
    }

    public static void main(String[] args) {
        String s = "Hello World";
        System.out.println(reverseWords(s));
        String s1 = "chase down";
        System.out.println(reverseWords(s1));
    }
}



class Student{
   String name;
    int age;
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public int compareTo(Student that) {
        if(this.age > that.age) return 1;
        else return -1;
    }

public static void main(String[] args) {
    Comparator<Student> com = (i, j) -> i.age > j.age ? 1 : -1;
    List<Student> students = new ArrayList<>();
    students.add(new Student("John", 18));
    students.add(new Student("Alice", 17)); 
    students.add(new Student("Bob", 19));
    students.sort(com);
}
}


class MaxCoinsCollection {
    // Function to calculate the maximum number of coins
    public static int maxCoins(int[] coins) {
        int n = coins.length;

        // Handle edge cases
        if (n == 0) return 0;
        if (n == 1) return coins[0];

        // Optimized approach using two variables
        int prev2 = coins[0]; // Maximum coins up to jar 1
        int prev1 = Math.max(coins[0], coins[1]); // Maximum coins up to jar 2

        // Loop through the remaining jars
        for (int i = 2; i < n; i++) {
            int current = Math.max(prev1, coins[i] + prev2);
            prev2 = prev1; // Shift the previous values
            prev1 = current;
        }

        return prev1; // Maximum coins collected
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking the size of the array as input
        System.out.print("Enter the number of jars: ");
        int n = scanner.nextInt();

        // Taking the coins in each jar as input
        int[] coins = new int[n];
        System.out.println("Enter the number of coins in each jar:");
        for (int i = 0; i < n; i++) {
            coins[i] = scanner.nextInt();
        }

        // Calculate and display the maximum coins that can be collected
        System.out.println("Maximum Coins: " + maxCoins(coins));

        // Close the scanner
        scanner.close();
    }
}


