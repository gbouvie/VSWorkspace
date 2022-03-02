#include <iostream>
#include <stdlib.h>

using namespace std;

int main()
{
    cout << "Choose size of your multidimensional array [matrix]: ";
    int size;
    cin >> size;
    int arr[size][size];
    int vet[size];
    
    for (int i = 0; i < size; i++)
    {
        if (i == 0)
        {
            vet[i] = 0;
        }else
        {
            vet[i] = rand() % 9 + 1;
        }
    }

    for (int d = 0; d < size; d++)
    {
        arr[d][d] = 0;
        for (int j = d + 1; j < size; j++)
        {
            if (d == 0)
            {
                arr[d][j] = vet[j];
            }
            else
            {
                arr[d][j] = rand() % 9 + 1;
            }
            
            arr[j][d] = arr[d][j];
        }
    }
    
    // print matrix
    for (int d = 0; d < size; d++)
    {
        for (int j = 0; j < size; j++)
        {
            cout << arr[d][j] << " ";
        }
        cout << "\n";
    }
    return 0;
}