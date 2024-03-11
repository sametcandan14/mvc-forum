const AddPostView = ({ onInputChange }) => {
  return (
    <div>
      <form>
        <h2>Yeni Gönderi Ekle</h2>
        <fieldset>
          <label>Kullanıcı Adı</label>
          <input
            onChange={(e) => onInputChange("user", e.target.value)}
            type="text"
            placeholder="Adınızı Giriniz"
          />
        </fieldset>
        <fieldset>
          <label>Başlık</label>
          <input type="text" placeholder="Başlık Giriniz" />
        </fieldset>
        <fieldset>
          <label>Açıklama</label>
          <textarea
            type="text"
            placeholder="Açıklamanızı Giriniz"
            maxLength={"100"}
          />
        </fieldset>

        <button>Gönder</button>
      </form>
    </div>
  );
};

export default AddPostView;
