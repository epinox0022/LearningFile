#include <iostream>
using namespace std;

int main()
{
    double L, w0, w1, w2;
    int choice;

    cout << "Distributed Load Calculator\n";
    cout << "1. Rectangular Load\n";
    cout << "2. Triangular Load\n";
    cout << "3. Trapezoidal Load\n";
    cout << "Enter load type (1-3): ";
    cin >> choice;

    if (choice == 1)
    {
        // Rectangular Load
        cout << "Enter length L (m): ";
        cin >> L;
        cout << "Enter load intensity w0 (kN/m): ";
        cin >> w0;

        double R = w0 * L;
        double x = L / 2.0;

        cout << "\nResultant Load R = " << R << " kN";
        cout << "\nLocation from left end = " << x << " m\n";
    }

    else if (choice == 2)
    {
        // Triangular Load
        cout << "Enter length L (m): ";
        cin >> L;
        cout << "Enter maximum load w0 (kN/m): ";
        cin >> w0;

        double R = 0.5 * w0 * L;
        double x = (L / 3.0); // from larger end

        cout << "\nResultant Load R = " << R << " kN";
        cout << "\nLocation from larger end = " << x << " m\n";
    }

    else if (choice == 3)
    {
        // Trapezoidal Load
        cout << "Enter length L (m): ";
        cin >> L;
        cout << "Enter w01 (kN/m) smaller side: ";
        cin >> w1;
        cout << "Enter w02 (kN/m) larger side: ";
        cin >> w2;

        // Decompose into rectangle + triangle
        double R1 = w1 * L;              // rectangular part
        double R2 = 0.5 * (w2 - w1) * L; // triangular part

        // Distances from left end
        double x1 = L / 2.0;
        double x2 = (2.0 * L) / 3.0;

        // Resultant and its position (using moment balance)
        double R = R1 + R2;
        double x = (R1 * x1 + R2 * x2) / R;

        cout << "\nResultant Load R = " << R << " kN";
        cout << "\nLocation from left end = " << x << " m\n";
    }

    else
    {
        cout << "Invalid choice!";
    }

    return 0;
}
