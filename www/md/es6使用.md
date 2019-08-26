this.commonService.subject.subscribe(({ showAside, showHeader }) => {
				this.showAside = !!showAside;
				this.showHeader = !!showHeader;
			});