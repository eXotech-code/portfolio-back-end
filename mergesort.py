def merge(A, L, R, index):
    i = j = k = 0
    while k < len(A):
        if L[i]["location"][index] <= R[j]["location"][index]:
            A[k] = L[i]
            i += 1
        else:
            A[k] = R[j]
            j += 1
        k += 1
    
# Index is the axis to sort by.
def mergeSort(A, index):
    if len(A) > 1:
        q = len(A)//2
        L = A[:q]
        R = A[q:]
        mergeSort(L, index)
        mergeSort(R, index)
        # 361 is one more than highest possible coord, so
        # I'm using it as a sentinel value.
        sentinel = {"location": [361 for x in range(2)]}
        L.append(sentinel)
        R.append(sentinel)
        merge(A, L, R, index)