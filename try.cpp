class Solution {
    private:
    int check(int x,
              const vector<int>& T,
              const vector<int>& B) {
        int flipsT = 0, flipsB = 0;
        for (int i = 0; i < T.size(); i++) {
            if (T[i] != x && B[i] != x) 
                return -1;
            else if (T[i] != x) 
                flipsT++;
            else if (B[i] != x) 
                flipsB++;
        }
        return min(flipsT, flipsB);
    }
    public:
        int minDominoRotations(vector<int>& tops, vector<int>& bottoms) {
        int ans = check(tops[0], tops, bottoms);
        if (ans != -1 || tops[0] == bottoms[0]) 
            return ans;
        return check(bottoms[0], tops, bottoms);
    }
    };