// class YtdSubscribeButton
// {
// 	/**
// 	 * @param buttonElement {Element}
// 	 */
// 	constructor( buttonElement )
// 	{
// 		this.__el = buttonElement
// 	}
//
// 	/**
// 	 *
// 	 * @return {string}
// 	 */
// 	getTextContent()
// 	{
// 		const textElement = this.__getTextWrapper()
//
// 		return textElement ?
// 		       textElement.textContent :
// 		       ""
// 	}
//
// 	addClass( classes )
// 	{
// 		this.__el.classList.add( classes )
// 	}
//
// 	/**
// 	 *
// 	 * @param text {string}
// 	 */
// 	setTextContent( text )
// 	{
// 		const textContainer = this.__getTextWrapper()
//
// 		if ( !textContainer )
// 			return
//
// 		textContainer.innerHTML = text
// 	}
//
// 	isUnsubscribeButton()
// 	{
// 		return this.getTextContent().toLowerCase().indexOf( "subscribed" ) > -1
// 	}
//
// 	__getTextWrapper()
// 	{
// 		return this.__el.getElementsByTagName( "yt-formatted-string" )[ 0 ]
// 	}
// }
//
// /**
//  * @type {Element[]}
//  */
// const buttons = [ ...document.querySelectorAll( `paper-button.ytd-subscribe-button-renderer` ) ]
// 	.map( el => new YtdSubscribeButton( el ) )
//
// buttons.forEach( b =>
// 	b.isUnsubscribeButton() ?
// 	b.setTextContent( "🦄" ) :
// 	null )
//
// console.log( "buttons:::", buttons )
//
