import java.util.ArrayList;
import java.util.Scanner;

class Object {

    public Object(String a) {   
        System.out.println("Object created " + a);
    }
    public static void main(String[] args) {
        new Object("Hello world");
        new Object("Welcome to Java");
        new Object("Object Oriented Programming");
        new Object("Let's create more objects");
    }
}
class HeapMemory {
    public static void main(String[] args) {
        Object obj = new Object("Hello  world");
        System.out.println(obj);
    }
}
// class Constructor{
//     public String  Constructor(String a){
//         System.out.println("Constructor created " + a);
//         return "Done";
//     }
//     public static void main(String[] args) {
//        Constructor cr = new Constructor();
//        System.out.println(cr.Constructor("Welcome to Java"));
//     }
// }
// package IBM;
class Static {
    public static String display() {
        System.out.println("Static class called");
        return "Done";
    }
    public int add(int a, int b) {
        int sum = a + b;
        System.out.println("Addition result: " + sum);
        return sum;
    }
    public static void main(String[] args) {
        Static st = new Static();
        st.add(10, 20);
        display();

    }
}
class Collectiom {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        System.out.println(list);
        list.remove(1);
        System.out.println(list);
    }
}
class DoubleEquals{
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "Hello";
        System.out.println(s1 == s2); // true
}
}

class EqualsOf{
    public static void main(String[] args) {
        String s1 = new String("Hello");
        System.out.println(System.identityHashCode(s1)); 
        String s2 = new String("hello");
        System.out.println(System.identityHashCode(s2)); 
       System.out.println(s1 == s2); // false because of different memory locations
       System.out.println(s1.equals(s2)); // true must be case sensitive 
}
}


class Mymain {

        String name;
    Mymain(String name){
        System.out.println("hello " + name);
    }
    Mymain(Mymain myname){
        System.out.println("Hello ramesh");
    }
    public static void main(String[] args) {
        Mymain mm = new Mymain("Pukesh");
        Mymain mm1 = new Mymain(mm);
    }
}
class Parent {
    Parent(String pass) {
        System.out.println("Parent constructor: " + pass);
    }
}

class Child extends Parent {
    Child(String message , String pass) {
        super(pass); // Mandatory to call super() here with arguments
        System.out.println("Child constructor: " + message);
    }
}

class Test {
    public static void main(String[] args) {
        Child child = new Child("Hello!", "World");
    }
}


interface A{
    void display1();
}
interface B{
    void display2();
}
class Namein implements A,B{
    public void display1(){
        System.out.println("Interface A");
    }
    public void display2(){
        System.out.println("Interface B"); 
    }
    public static void main(String[] args) {
        Namein n = new Namein(); 
        n.display1();
        n.display2();
    }
}

class Hell {
    public static void main(String[] args) {
        Scanner sc  = new Scanner(System.in);
        System.out.println();
        int value = sc.nextInt();
        for (int i = 0 ; i < value ; i++){
            for ( int j = 0; j< value ; j++){
                System.out.print("*");
            }
            System.out.println("");
        }
    }
}

interface Intro{
   default void Itro(){
        System.out.println("Interface Intro");
    };
}