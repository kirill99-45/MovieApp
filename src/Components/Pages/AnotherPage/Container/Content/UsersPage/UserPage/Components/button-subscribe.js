export const ButtonSubscribe = (props) => {

  const getSubsrcibe = () => {
    if (props.activeUser.id) {
      if (props.btnSubscribersState.btn === 'btn-subscribed') {
        props.setBtnSubscribersState({ btn : 'btn-subscribe', btnTitle : 'Подписаться', titleForBtn : 'Подписаться' })
        props.unSubscribe(props.activeUser, props.user)
      } else {
        props.setBtnSubscribersState({ btn : 'btn-subscribed', btnTitle : 'Вы подписаны', titleForBtn : 'Отписаться' })
        props.getSubscribed(props.activeUser, props.user)
      }
    } else {
      props.setLayoutState('layout-visible')
    }
  }

  return (
    <button
      className={props.btnSubscribersState.btn}
      title={props.btnSubscribersState.btnTitle}
      type='button'
      onClick={getSubsrcibe}
    >
      {props.btnSubscribersState.titleForBtn}
    </button>
  )
}
