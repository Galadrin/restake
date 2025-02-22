function ValidatorLink(props) {
  let validator = props.validator
  if(!validator && props.operator) validator = props.operator.validatorData
  if(!validator) return props.fallback || null

  const website = () => {
    let url = validator.description && validator.description.website
    if(!url) return

    return url.startsWith('http') ? url : ('https://' + url)
  }

  if(!website()){
    return props.children || validator.description.moniker
  }

  return (
    <a href={website()} target="_blank" rel="noreferrer" className={[props.className, "text-white text-decoration-none"].join(' ')}>
      {props.children || validator.description.moniker}
    </a>
  );
}

export default ValidatorLink
