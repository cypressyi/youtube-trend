export default function formatView(view) {
  if (view > 1e6) {
    return (`${Math.floor((view / 1e6), -1)}M`)
  } else if (view > 1e3) {
    return (`${Math.floor((view / 1e3), -1)}K`)
  }
  return view
}
