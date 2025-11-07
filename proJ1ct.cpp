#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    double m = 0, W = 0, thetaDeg = 0, mu = 0, Nf = 0, Ff = 0;
    double g = 9.81;
    bool hasMass = false, hasWeight = false, hasAngle = false, hasMu = false;
    bool hasNf = false, hasFf = false;

    cout << "Enter known values (enter 0 if unknown):\n";
    cout << "Mass (kg): ";
    cin >> m;
    cout << "Weight (N): ";
    cin >> W;
    cout << "Angle (deg): ";
    cin >> thetaDeg;
    cout << "Coefficient of Friction (μ): ";
    cin >> mu;
    cout << "Normal Force (N): ";
    cin >> Nf;
    cout << "Frictional Force (N): ";
    cin >> Ff;

    if (m > 0)
        hasMass = true;
    if (W > 0)
        hasWeight = true;
    if (thetaDeg > 0)
        hasAngle = true;
    if (mu > 0)
        hasMu = true;
    if (Nf > 0)
        hasNf = true;
    if (Ff > 0)
        hasFf = true;

    if (!hasWeight && hasMass)
    {
        W = m * g;
        hasWeight = true;
    }
    else if (!hasMass && hasWeight)
    {
        m = W / g;
        hasMass = true;
    }

    if (!hasAngle && hasMu)
    {
        thetaDeg = atan(mu) * 180 / M_PI;
        hasAngle = true;
    }
    else if (!hasMu && hasAngle)
    {
        mu = tan(thetaDeg * M_PI / 180);
        hasMu = true;
    }

    if (!hasNf && hasWeight && hasAngle)
    {
        double thetaRad = thetaDeg * M_PI / 180;
        Nf = W * cos(thetaRad);
        hasNf = true;
    }
    else if (!hasNf && hasWeight && !hasAngle)
    {
        Nf = W;
        hasNf = true;
    }

    if (!hasFf && hasMu && hasNf)
    {
        Ff = mu * Nf;
        hasFf = true;
    }
    else if (!hasFf && hasWeight && hasAngle && !hasMu)
    {
        double thetaRad = thetaDeg * M_PI / 180;
        Ff = W * sin(thetaRad);
        hasFf = true;
    }

    // #include <iostream>
    // #include <cstdlib>
    // #include <ctime>
    // using namespace std;

    // int main()
    // {
    //     srand(time(0)); // seed random number generator

    //     int secret = rand() % 100 + 1; // random number between 1 and 100
    //     int guess;
    //     int tries = 0;

    //     cout << "=============================\n";
    //     cout << " 🎯 GUESS THE NUMBER GAME 🎯\n";
    //     cout << "=============================\n";
    //     cout << "I'm thinking of a number between 1 and 100.\n";
    //     cout << "Can you guess it?\n\n";

    //     do
    //     {
    //         cout << "Enter your guess: ";
    //         cin >> guess;
    //         tries++;

    //         if (guess > secret)
    //             cout << "Too high! Try again.\n";
    //         else if (guess < secret)
    //             cout << "Too low! Try again.\n";
    //         else
    //             cout << "\n🎉 Congratulations! You got it in " << tries << " tries!\n";

    //     } while (guess != secret);

    //     cout << "The secret number was: " << secret << endl;
    //     cout << "Thanks for playing!\n";
    //     return 0;
    // }

    // #include <iostream>
    // using namespace std;

    // void checkNumber(int num)
    // {
    //     if (num >= 0)
    //         cout << "POSITIVE" << endl;
    //     else
    //         cout << "NEGATIVE" << endl;
    // }

    // int main()
    // {
    //     int value;
    //     cout << "Enter an integer: ";
    //     cin >> value;
    //     checkNumber(value);
    //     return 0;
    // }

    // #include <iostream>
    // using namespace std;

    // void checkBoolean(int num)
    // {
    //     if (num == 0)
    //         cout << "FALSE" << endl;
    //     else
    //         cout << "TRUE" << endl;
    // }

    // int main()
    // {
    //     int value;
    //     cout << "Enter an integer: ";
    //     cin >> value;
    //     checkBoolean(value);
    //     return 0;
    // }

    // #include <iostream>
    // using namespace std;

    // void checkCase(char letter)
    // {
    //     if (letter >= 'a' && letter <= 'z')
    //         cout << "LOWER CASE" << endl;
    //     else if (letter >= 'A' && letter <= 'Z')
    //         cout << "UPPER CASE" << endl;
    //     else
    //         cout << "Not a letter." << endl;
    // }

    // int main()
    // {
    //     char ch;
    //     cout << "Enter a letter: ";
    //     cin >> ch;
    //     checkCase(ch);
    //     return 0;
    // }

    // #include <iostream>
    // using namespace std;

    // void bingoLetter(int number)
    // {
    //     if (number >= 1 && number <= 15)
    //         cout << "B" << endl;
    //     else if (number >= 16 && number <= 30)
    //         cout << "I" << endl;
    //     else if (number >= 31 && number <= 45)
    //         cout << "N" << endl;
    //     else if (number >= 46 && number <= 60)
    //         cout << "G" << endl;
    //     else if (number >= 61 && number <= 75)
    //         cout << "O" << endl;
    //     else
    //         cout << "Invalid number! Please enter a value from 1 to 75." << endl;
    // }

    // int main()
    // {
    //     int num2;
    //     cout << "Enter a number (1-75): ";
    //     cin >> num2;

    //     bingoLetter(num2);

    //     return 0;
    // }
    // 23

    // #include <iostream>
    // #include <iomanip>
    // using namespace std;

    // #include <iostream>
    // #include <iomanip>
    // using namespace std;

    // void main()
    // {
    //     int rows = 3, columns = 4;
    //     int numbers[3][4];
    //     int count = 1;

    //     for (int i = 0; i < rows; ++i)
    //     {
    //         for (int j = 0; j < columns; ++j)
    //         {
    //             numbers[i][j] = count++;
    //             cout << setw(5) << numbers[i][j];
    //         }
    //         cout << "\n";
    //     }

    //     return 0;
    // }

    // {
    //     int rows = 3, columns = 4;
    //     int numbers[3][4];
    //     int count = 1;

    //     for (int i = 0; i < rows; ++i)
    //     {
    //         for (int j = 0; j < columns; ++j)
    //         {
    //             numbers[i][j] = count++;
    //             cout << setw(5) << numbers[i][j];
    //         }
    //         cout << "\n";
    //     }

    //     return 0;
    // }
