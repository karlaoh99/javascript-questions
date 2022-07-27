/*
Given two arrays A and B, return the indices at 
which the two arrays intersect. If the two arrays 
have no intersection at all, return null.
*/
function findIntersection(listA, listB) {
    let iA = listA.length - 1;
    let iB = listB.length - 1;

    while (iA >= 0 && iB >= 0) {
        if (listA[iA] != listB[iB])
            break;
        iA--;
        iB--;
    }

    if (iA == listA.length - 1) return null;
    return [iA + 1, iB + 1];
}

