# =============================================================================
# Replace the char c in a string s given index i
# type s, string
# type i, int
# type c, string
# rtype new_s, string
# =============================================================================
def string_replacement(s,i,c):
    new_s = list(s)
    new_s[i] = str(c)
    new_s = "".join(new_s)
    return new_s

# =============================================================================
# Find the number with least distance to the target number
# =============================================================================
def min_abs_diff(a,high,low,n):
    if high>=low:
        middle = (high+low)/2