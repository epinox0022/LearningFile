#include <iostream>
#include <thread>
#include <chrono>
#include <vector>

int main()
{
    std::vector<std::string> lyrics = {
        "",
        "You know, you know where you are with,",
        "You know where you are with",
        "Floor collapses, floating",
        "Bouncing back",
        "",
        "And one day, I am gonna grow wings",
        "A chemical reaction (you know where you are)",
        "Hysterical and useless (you know where you are)",
        "Hysterical and (you know where you are)",
    };

    for (const auto &line : lyrics)
    {
        std::cout << line << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(2)); // 2-second delay
    }

    return 0;
};