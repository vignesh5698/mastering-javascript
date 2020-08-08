const largestAreaInHistogram = (heights) => {
  const n = heights.length, stack = [];
  let maxArea = 0;

  for(let i=0; i<n; i++) {
    while(stack.length && heights[i] <= heights[stack[stack.length-1]]) {
      maxArea = Math.max(maxArea, getArea(i, heights, stack));
    }

    stack.push(i);
  }

  while(stack.length) {
    maxArea = Math.max(maxArea, getArea(n, heights, stack));
  }
  return maxArea;
}

const getArea = (i, heights, stack) => {
  const height = heights[stack.pop()];
  const width = stack.length ? i - stack[stack.length-1] -1 : i;
  return width * height;
}

arr = [6, 1,2,3,4,4,2];
console.log(largestAreaInHistogram(arr));