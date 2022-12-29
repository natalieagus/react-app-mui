https://www.youtube.com/watch?v=wYpCWwD1oz0

# Folder architecture

1. Components can be reused anywhere
2. But scenes are what describes each page

# Tailwind shades

Use this to create variation shades from a primary color

# useMemo

`useState` is causing a re-render on the call of the setState method (second element in the array returned). It does **not** have any dependencies like useMemo or useEffect.

`useMemo` only recalculates a value if the elements in its dependency array change (if there are no dependencies - i.e. the array is empty, it will recalculate only once). If the array is left out, it will **recalculate** on every render. Calling the function does not cause a re-render. Also it runs during the render of the component and not before.

useEffect is called after each render, if elements in its dependency array have changed or the array is left out. If the array is empty, it will only be run once on the initial mount (and unmount if you return a cleanup function).

```
function CoolComponent(props) {
    const items = useMemo(() =>
        props.rawItems.map(parseItem);
    , [props.rawItems]);

    // rest of component...
}
```

vs

```
function CoolComponent(props) {
    const [items, setItems] = useState();

    useEffect(() => {
        setItems(props.rawItems.map(parseItem));
    }, [props.rawItems]);

    // rest of component...
}
```

The first one will render the correct item in the beginning.
The second one will render twice: once with old rawItems, once more with new one. useEffect is ran only after render is complete.

Note: if useMemo does heavy computation, it's better to pass it to useEffect hook because it can be dealt with AFTER something is rendered out already.

Also, using `useMemo()` without dependencies array will calculate the value on every render.

If no array is provided, a new value will be computed on every render.

- It'll be equivalent to `const value = ...`
- Using `useMemo()` with an empty dependencies array will calculate the value only once, on mount.

# yup

Used to validate form content

# nivo

Very pretty and nice charts
