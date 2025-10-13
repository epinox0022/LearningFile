// #include <iostream>
// #include <cmath>
// using namespace std;

// int main()
// {
//     double m = 0, W = 0, thetaDeg = 0, thetaRad = 0;
//     double Ff = 0, Nf = 0, R = 0, mu = 0, g = 9.81;
//     bool hasMass = false, hasWeight = false, hasAngle = false;
//     bool hasFf = false, hasNf = false, hasMu = false;

//     cout << "=== ANGLE OF FRICTION SYSTEM CALCULATOR ===\n";
//     cout << "Enter values you know (enter 0 if unknown):\n";

//     cout << "Mass (kg): ";
//     cin >> m;
//     if (m > 0)
//         hasMass = true;

//     cout << "Weight (N): ";
//     cin >> W;
//     if (W > 0)
//         hasWeight = true;

//     cout << "Angle (degrees): ";
//     cin >> thetaDeg;
//     if (thetaDeg > 0)
//         hasAngle = true;

//     cout << "Normal Force (Nf) [N]: ";
//     cin >> Nf;
//     if (Nf > 0)
//         hasNf = true;

//     cout << "Frictional Force (Ff) [N]: ";
//     cin >> Ff;
//     if (Ff > 0)
//         hasFf = true;

//     cout << "Coefficient of Friction (μ): ";
//     cin >> mu;
//     if (mu > 0)
//         hasMu = true;

//     // --- Step 1: compute weight if mass given ---
//     if (!hasWeight && hasMass)
//     {
//         W = m * g;
//         hasWeight = true;
//     }

//     // --- Step 2: compute mass if weight given ---
//     if (!hasMass && hasWeight)
//     {
//         m = W / g;
//         hasMass = true;
//     }

//     // --- Step 3: if angle is missing but μ is known ---
//     if (!hasAngle && hasMu)
//     {
//         thetaRad = atan(mu);
//         thetaDeg = thetaRad * 180.0 / M_PI;
//         hasAngle = true;
//     }

//     // --- Step 4: if μ missing but angle known ---
//     if (!hasMu && hasAngle)
//     {
//         thetaRad = thetaDeg * M_PI / 180.0;
//         mu = tan(thetaRad);
//         hasMu = true;
//     }

//     // --- Step 5: if both W and angle known, compute Nf and Ff ---
//     if (hasWeight && hasAngle)
//     {
//         thetaRad = thetaDeg * M_PI / 180.0;
//         Nf = W * cos(thetaRad);
//         Ff = W * sin(thetaRad);
//         hasNf = true;
//         hasFf = true;
//     }

//     // --- Step 6: if Nf known and μ known, compute Ff ---
//     if (hasNf && hasMu && !hasFf)
//     {
//         Ff = mu * Nf;
//         hasFf = true;
//     }

//     // --- Step 7: if Ff and Nf known, compute μ ---
//     if (hasFf && hasNf && !hasMu)
//     {
//         mu = Ff / Nf;
//         hasMu = true;
//     }

//     // --- Step 8: Resultant R (always equal to W) ---
//     if (hasWeight)
//         R = W;

//     // --- Step 9: Display results ---
//     cout << "\n=== RESULTS ===\n";
//     cout << "Mass (m): " << m << " kg\n";
//     cout << "Weight (W): " << W << " N\n";
//     cout << "Angle (θ): " << thetaDeg << "°\n";
//     cout << "Normal Force (Nf): " << Nf << " N\n";
//     cout << "Frictional Force (Ff): " << Ff << " N\n";
//     cout << "Resultant Force (R): " << R << " N\n";
//     cout << "Coefficient of Friction (μ): " << mu << endl;

//     return 0;
// }

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

#include <iostream>
using namespace std;

void checkNumber(int num)
{
    if (num >= 0)
        cout << "POSITIVE" << endl;
    else
        cout << "NEGATIVE" << endl;
}

int main()
{
    int value;
    cout << "Enter an integer: ";
    cin >> value;
    checkNumber(value);
    return 0;
}
